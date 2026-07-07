import React, { useRef } from 'react'

const Scroll = () => {

    const homeref = useRef()
    const aboutref = useRef()
    const proref = useRef()
    const profileref = useRef()

    const homemove = useRef()



    const handlehome =()=>{
        homemove.current.scrollIntoView()
    }
  return (
    <>
    <div>
        <div>
            <button ref={homeref} onClick={handlehome}>Home</button>
            <button ref={aboutref} onClick={handlehome}>About</button>
            <button ref={proref} onClick={handlehome}>Project</button>
            <button ref={profileref} onClick={handlehome}>Profile</button>
        </div>


        <section ref={homemove}>
            <h1>Home</h1>

            <p>Home is not just a place, it is a feeling.
It is where love begins and never ends.
A home is filled with warmth and comfort.
It gives us a sense of safety and belonging.
Home is where our family lives.
It is where we can be our true selves.
Every corner of a home holds memories.
It is a place of laughter and happiness.
Home protects us from the outside world.
It teaches us values and traditions.
A home may be small, but it is full of love.
It is where we grow and learn.
Home is where we celebrate special moments.
It is a place where we find peace.
No matter where we go, we always miss home.
It gives us strength during tough times.
Home is built with care and affection.
It is where we feel understood.
A house becomes a home with love.
It is a place of comfort after a long day.
Home is where we share our joys and sorrows.
It gives us a sense of identity.
It is filled with the voices of loved ones.
Home is where we feel secure.
It shapes who we are.
It is where our journey begins.
Home is our happiest place.
It is where we find true happiness.
A loving home is the greatest blessing.
Home will always be close to our hearts.
</p>































        </section>
    </div>
    </>
  )
}

export default Scroll