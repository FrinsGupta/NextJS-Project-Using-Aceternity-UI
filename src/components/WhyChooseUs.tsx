"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content=  [
      {
        "title": "Course 1",
        "description": "Description for Course 1 When it comes to vodka, you want to choose a brand that you know you can trust. There are many quality brands on the market, so do your research and find one that best suits your taste."
      },
      {
        "title": "Course 2",
        "description": "Description for Course 2 When it comes to vodka, you want to choose a brand that you know you can trust. There are many quality brands on the market, so do your research and find one that best suits your taste."
      },
      {
        "title": "Course 3",
        "description": "Description for Course 3 When it comes to vodka, you want to choose a brand that you know you can trust. There are many quality brands on the market, so do your research and find one that best suits your taste."
      },
      {
        "title": "Course 4",
        "description": "Description for Course 4 When it comes to vodka, you want to choose a brand that you know you can trust. There are many quality brands on the market, so do your research and find one that best suits your taste."
      },
      {
        "title": "Course 5",
        "description": "Description for Course 5 When it comes to vodka, you want to choose a brand that you know you can trust. There are many quality brands on the market, so do your research and find one that best suits your taste."
      }
    ]
  
  
const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs