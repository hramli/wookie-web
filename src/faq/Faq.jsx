import React from 'react';
import './Faq.css'

export function Faq() {
  return (
    <div>
      <h1 className="common-page-title">Faq and Help</h1>

      <div className="faq-sub-section">
        <h1 className="faq-sub-section-title">Ordering</h1>
        <div className="faq-sub-section-contents">
          <div className="faq-qna-wrapper">
            <li className="faq-question">How do I order?</li>
            <p className="faq-answer">Please Whatsapp 945 945 45 for order and delivery.</p>
          </div>

          <div className="faq-qna-wrapper">
            <li className="faq-question">How do I pay?</li>
            <p className="faq-answer">You can pay via PayNow to UEN 53419046D. Screenshot and WhatsApp us at 945 945 45 upon payment.</p>
          </div>
        </div>
      </div>

      <div className="faq-sub-section">
        <h1 className="faq-sub-section-title">Delivery</h1>
        <div className="faq-sub-section-contents">
          <div className="faq-qna-wrapper">
            <li className="faq-question">Do you provide delivery service?</li>
            <p className="faq-answer">Yes! For your convenience, we provide delivery services at $10 per address, and an extra $5 for CBD areas.</p>
            <p className="faq-answer">Delivery time varies from 12pm to 5pm. Re-deliveries cost $10.</p>
          </div>

          <div className="faq-qna-wrapper">
            <li className="faq-question">Can I pickup my order?</li>
            <p className="faq-answer">Yes! You can pickup your order at Yishun without delivery charges.</p>
          </div>
        </div>
      </div>

      <div className="faq-sub-section">
        <h1 className="faq-sub-section-title">Care Guide</h1>
        <div className="faq-sub-section-contents">
          <div className="faq-qna-wrapper">
            <li className="faq-question">Cookie Care</li>
            <p className="faq-answer">Our cookies are best eaten fresh!</p>
            <p className="faq-answer">For storage, store in air tight container and place in chiller for up to 3 days.</p>
            <p className="faq-answer">Warm up in preheated oven or air fryer at 150 degrees for 2-3 minutes or until warm.</p>
          </div>

          <div className="faq-qna-wrapper">
            <li className="faq-question">Cake Care</li>
            <p className="faq-answer">Our cakes are best consumed once taken out from fridge. No stabilisers are used in baking process, so cream will get soft when in room temperature.</p>
            <p className="faq-answer">Cakes are to be refridgerated upon receiving.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
