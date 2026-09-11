'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaFileInvoiceDollar, FaCalculator } from 'react-icons/fa';

export default function GSTInvoiceHelperPage() {
  const [baseAmount, setBaseAmount] = useState('10000');
  const [gstRate, setGstRate] = useState('18');
  const [supplyType, setSupplyType] = useState('intra'); // intra (CGST+SGST) or inter (IGST)

  const numBase = parseFloat(baseAmount) || 0;
  const numRate = parseFloat(gstRate) || 0;

  const totalTax = (numBase * numRate) / 100;
  const grandTotal = numBase + totalTax;

  const cgst = supplyType === 'intra' ? totalTax / 2 : 0;
  const sgst = supplyType === 'intra' ? totalTax / 2 : 0;
  const igst = supplyType === 'inter' ? totalTax : 0;

  return (
    <div style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container py-5">
        <div className="mb-4">
          <Link href="/tools" className="text-decoration-none fw-semibold d-inline-flex align-items-center" style={{ color: '#FD6A02' }}>
            <FaArrowLeft className="me-2" /> Back to Tools
          </Link>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="d-inline-flex p-3 rounded-circle mb-3" style={{ background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02' }}>
            <FaFileInvoiceDollar className="text-3xl" />
          </div>
          <h1 className="h2 fw-bold text-white mb-2">GST Invoice &amp; Tax Split Calculator</h1>
          <p className="text-secondary" style={{ color: '#94a3b8' }}>
            Accurately calculate Indian GST breakdowns (CGST + SGST vs IGST) for tax-compliant billing and invoice generation.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-5">
            <div className="p-4 rounded-4" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="h5 fw-bold text-white mb-3">Invoice Input</h3>

              <div className="mb-3">
                <label className="form-label text-light small fw-bold">Taxable Base Amount (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}
                  value={baseAmount}
                  onChange={(e) => setBaseAmount(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light small fw-bold">GST Slab Rate</label>
                <select
                  className="form-select"
                  style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}
                  value={gstRate}
                  onChange={(e) => setGstRate(e.target.value)}
                >
                  <option value="0">0% (Exempt)</option>
                  <option value="5">5% (Essential items)</option>
                  <option value="12">12% (Standard items)</option>
                  <option value="18">18% (IT &amp; Digital Services)</option>
                  <option value="28">28% (Luxury goods)</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label text-light small fw-bold">Place of Supply</label>
                <div className="d-flex gap-3 mt-1">
                  <label className="d-flex align-items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="supply"
                      checked={supplyType === 'intra'}
                      onChange={() => setSupplyType('intra')}
                    />
                    <span className="small text-light">Intra-State (CGST + SGST)</span>
                  </label>
                  <label className="d-flex align-items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="supply"
                      checked={supplyType === 'inter'}
                      onChange={() => setSupplyType('inter')}
                    />
                    <span className="small text-light">Inter-State (IGST)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="p-4 rounded-4" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="h5 fw-bold text-white mb-3">Tax Summary Slip</h3>

              <div className="p-3 rounded-3 mb-3" style={{ background: '#020617', border: '1px solid #1e293b' }}>
                <div className="d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span className="text-secondary">Taxable Amount:</span>
                  <span className="fw-bold text-white">₹{numBase.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>

                {supplyType === 'intra' ? (
                  <>
                    <div className="d-flex justify-content-between py-2 border-bottom border-secondary">
                      <span className="text-secondary">CGST ({numRate / 2}%):</span>
                      <span className="fw-bold" style={{ color: '#38bdf8' }}>₹{cgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="d-flex justify-content-between py-2 border-bottom border-secondary">
                      <span className="text-secondary">SGST ({numRate / 2}%):</span>
                      <span className="fw-bold" style={{ color: '#38bdf8' }}>₹{sgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </>
                ) : (
                  <div className="d-flex justify-content-between py-2 border-bottom border-secondary">
                    <span className="text-secondary">IGST ({numRate}%):</span>
                    <span className="fw-bold" style={{ color: '#38bdf8' }}>₹{igst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>
                )}

                <div className="d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span className="text-secondary">Total Tax Liability:</span>
                  <span className="fw-bold text-warning">₹{totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>

                <div className="d-flex justify-content-between pt-3">
                  <span className="fw-bold text-white h5 mb-0">Total Invoice Amount:</span>
                  <span className="fw-bold h5 mb-0" style={{ color: '#FD6A02' }}>₹{grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="text-center p-3 rounded-3" style={{ background: 'rgba(253, 106, 2, 0.1)', border: '1px solid rgba(253, 106, 2, 0.3)' }}>
                <p className="small mb-1 text-light">Need automated invoice templates &amp; inventory management?</p>
                <Link href="/products/invobill" className="fw-bold text-decoration-none" style={{ color: '#FD6A02' }}>
                  Explore InvoBill Billing Software &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
