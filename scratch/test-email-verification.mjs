import { verifyEmailAddress } from '../lib/email-verifier.js';

async function runTests() {
  console.log('=== STARTING 100% FREE EMAIL VERIFIER AUTOMATED TESTS ===\n');

  const testCases = [
    { email: 'user@tempmail.com', expectedValid: false, label: 'Disposable Domain (tempmail.com)' },
    { email: 'test@mailinator.com', expectedValid: false, label: 'Disposable Domain (mailinator.com)' },
    { email: 'spammer@10minutemail.com', expectedValid: false, label: 'Disposable Domain (10minutemail.com)' },
    { email: 'fake@subdomain.yopmail.com', expectedValid: false, label: 'Disposable Subdomain (yopmail.com)' },
    { email: 'invalid-email-format', expectedValid: false, label: 'Invalid Syntax Format' },
    { email: 'nobody@thisdomaindoesnotexist999888.xyz', expectedValid: false, label: 'Non-Existent MX Domain' },
    { email: 'ashish@gmail.com', expectedValid: true, label: 'Genuine Gmail Address' },
    { email: 'info@maajankiwebtech.com', expectedValid: true, label: 'Genuine Business Domain' }
  ];

  let passed = 0;
  for (const tc of testCases) {
    const res = await verifyEmailAddress(tc.email);
    const isPass = res.valid === tc.expectedValid;
    if (isPass) passed++;

    console.log(
      `${isPass ? '✅ PASS' : '❌ FAIL'}: ${tc.label} ("${tc.email}") => Valid: ${res.valid}` +
      (res.reason ? ` | Reason: "${res.reason}"` : ` | Domain: ${res.domain}`)
    );
  }

  console.log(`\n=== RESULTS: ${passed}/${testCases.length} TESTS PASSED ===`);
  if (passed === testCases.length) {
    console.log('🌟 100% FREE EMAIL VERIFICATION & DISPOSABLE BLOCKER IS WORKING PERFECTLY!\n');
  }
}

runTests();
