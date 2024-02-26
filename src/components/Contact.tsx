'use client'

import { Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useRef } from 'react'
import useScrollTo from '@/lib/hooks/useScrollTo'

export default function Contact() {
  const ref = useScrollTo<HTMLDivElement>()

  return (
    <div className="w-full py-16 px-4 bg-white" ref={ref}>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            const formData = Object.fromEntries(
              new FormData(e.target as HTMLFormElement),
            )
            // TODOS: submit form data
          }}
        >
          <Input
            placeholder="Enter your name"
            className="col-span-1"
            name="sender_name"
            required
          />
          <Input
            placeholder="Enter Email"
            className="col-span-1"
            name="sender_email"
            required
          />
          <Input
            placeholder="Subject"
            className="col-span-1"
            name="subject"
            required
          />
          <Textarea
            placeholder="Enter Message"
            className="col-span-1 md:col-span-2  min-h-32"
            name="message"
            required
          />
          <div className="col-span-1 mt-5 md:col-span-2 flex justify-center">
            <Button className="text-xl font-light" type="submit">
              <Send className="mr-2 font-light" />
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
