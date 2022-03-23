import React from "react";
import Item from "./Item";

function PortfolioSec() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">
          {/* <!-- Portfolio Item 1--> */}
          <Item></Item>
          {/* <!-- Portfolio Item 2--> */}
          <Item imgSrc="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80" />
          {/* <!-- Portfolio Item 3--> */}
          <Item imgSrc="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
          {/* <!-- Portfolio Item 4--> */}
          <Item imgSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80" />
          {/* <!-- Portfolio Item 5--> */}
          <Item imgSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          {/* <!-- Portfolio Item 6--> */}
          <Item imgSrc="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSec;
