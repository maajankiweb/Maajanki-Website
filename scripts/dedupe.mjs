import mongoose from 'mongoose';

const uri = 'mongodb+srv://maajankiweb_db_user:6y7FiwRUeuGSarUH@maajanki1.jhjgayk.mongodb.net/maajanki_db?retryWrites=true&w=majority&appName=Maajanki1';

async function dedupe() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
    
    const docs = await mongoose.connection.collection('portfolios').find({}).toArray();
    console.log('Total documents found:', docs.length);
    
    const seen = new Set();
    const idsToDelete = [];

    for (const doc of docs) {
      const key = doc.title ? doc.title.trim().toLowerCase() : doc._id.toString();
      if (seen.has(key)) {
        idsToDelete.push(doc._id);
      } else {
        seen.add(key);
      }
    }

    console.log('IDs to delete:', idsToDelete.length);
    if (idsToDelete.length > 0) {
      const res = await mongoose.connection.collection('portfolios').deleteMany({ _id: { $in: idsToDelete } });
      console.log('Deleted duplicate count:', res.deletedCount);
    }

    const remaining = await mongoose.connection.collection('portfolios').find({}).toArray();
    console.log('Remaining documents count:', remaining.length);
    remaining.forEach((d) => console.log('KEPT:', d._id, '->', d.title));
    
    await mongoose.disconnect();
    console.log('Done!');
  } catch (err) {
    console.error('Dedupe Error:', err);
  }
}

dedupe();
