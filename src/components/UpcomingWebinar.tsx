'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const featurdWebinar = [
    {
      "title": "Music Theory Basics",
      "description": "Learn the fundamentals of music theory including notes, scales, and chords.",
      "slug": "music-theory-basics",
      "isFeatured": true
    },
    {
      "title": "Guitar Techniques Workshop",
      "description": "Explore advanced guitar techniques such as fingerpicking, bending, and harmonics.",
      "slug": "guitar-techniques-workshop",
      "isFeatured": false
    },
    {
      "title": "Piano Masterclass",
      "description": "Refine your piano skills with this comprehensive masterclass covering technique, repertoire, and interpretation.",
      "slug": "piano-masterclass",
      "isFeatured": true
    },
    {
      "title": "Songwriting Essentials",
      "description": "Unlock the secrets of songwriting with lessons on melody, harmony, lyrics, and structure.",
      "slug": "songwriting-essentials",
      "isFeatured": false
    },
    {
      "title": "Music Production Fundamentals",
      "description": "Get started with music production using digital audio workstations (DAWs), recording techniques, and mixing/mastering.",
      "slug": "music-production-fundamentals",
      "isFeatured": true
    },
    {
      "title": "Introduction to Jazz Improvisation",
      "description": "Dive into the world of jazz improvisation with lessons on scales, modes, and improvisational techniques.",
      "slug": "introduction-to-jazz-improvisation",
      "isFeatured": false
    }
  ]

  
const UpcomingWebinar = () => {
  return (
    <div className="p-12 bg-gray-900 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center">
                  <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h1>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
              </div>
              <div className=" text-center mt-10 ">
                  <HoverEffect items={featurdWebinar.map(webinar => ({
                      title: webinar.title,
                      description: webinar.description,
                      link:'/'
                  }))} />
              </div>
              <div className="text-center mt-10 ">
                  <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                      View All Webinars
                  </Link>
              </div>
      </div>
    </div>
  )
}

export default UpcomingWebinar
