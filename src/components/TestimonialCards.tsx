'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const musicTestimonials = [
    {
      "quote": "Music expresses that which cannot be said and on which it is impossible to be silent.",
      "name": "Victor Hugo",
      "title": "Les Misérables"
    },
    {
      "quote": "Without music, life would be a mistake.",
      "name": "Friedrich Nietzsche",
      "title": "Twilight of the Idols"
    },
    {
      "quote": "Music is the universal language of mankind.",
      "name": "Henry Wadsworth Longfellow",
      "title": "Outre-Mer"
    },
    {
      "quote": "Where words fail, music speaks.",
      "name": "Hans Christian Andersen",
      "title": "What the Moon Saw and Other Tales"
    },
    {
      "quote": "Music is the literature of the heart; it commences where speech ends.",
      "name": "Alphonse de Lamartine",
      "title": "Histoire des Girondins"
    },
    {
      "quote": "One good thing about music, when it hits you, you feel no pain.",
      "name": "Bob Marley",
      "title": "Trench Town Rock"
    }
]
  
const TestimonialCards = () => {
    return (
         
        //   <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
        // <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="h-[35rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-8 z-10">Here Our Harmony: Voices of Success</h2>
          <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-6xl">
              <InfiniteMovingCards
        items={musicTestimonials}
        direction="right"
        speed="slow"
      />
              </div>
      </div>
    </div>
  )
}

export default TestimonialCards
