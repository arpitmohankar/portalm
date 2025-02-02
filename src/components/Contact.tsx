"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter,Instagram,XIcon, } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    message: string;
  }

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');
    
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            setSubmitStatus('success');
          } else {
            setSubmitStatus('error');
          }
        } catch (error) {
          setSubmitStatus('error');
        } finally {
          setIsSubmitting(false);
        }
      };
      
  return (
    <div className="space-y-8 ">
      <h2 className="text-3xl font-bold text-gold-500 flex items-center gap-2">
        <Mail className="w-6 h-6" /> Contact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6">
      <Card className="bg-black/20 border border-gold-500/30 p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              className="bg-black/30 border-gold-500/50 focus:ring-gold-500"
              {...register('name', { required: true })}
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}

            <Input
              type="email"
              placeholder="Your Email"
              className="bg-black/30 border-gold-500/50 focus:ring-gold-500"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}

            <Textarea
              placeholder="Your Message"
              rows={5}
              className="bg-black/30 border-gold-500/50 focus:ring-gold-500"
              {...register('message', { required: true, minLength: 10 })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">Message must be at least 10 characters</span>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gold-500 hover:bg-gold-600 text-black"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {submitStatus === 'success' && (
            <div className="text-green-500 text-center mt-4">
              Message sent successfully!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-500 text-center mt-4">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </Card>




        <Card className="animate-trail bg-black/20 border border-gold-500/30 p-6 flex flex-col items-center justify-center space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gold-400">Let's Connect!</h3>
            <p className="text-gray-400">Open for opportunities and collaborations</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/arpitmohankar/" target="_blank" className="p-3 rounded-full bg-gold-500/10 hover:bg-gold-500/20 transition">
              <Github className="w-6 h-6 text-gold-500" />
            </a>
            <a href="https://www.linkedin.com/in/arpit-mohankar-shroams" target="_blank" className="p-3 rounded-full bg-gold-500/10 hover:bg-gold-500/20 transition">
              <Linkedin className="w-6 h-6 text-gold-500" />
            </a>
            <a href="https://x.com/ArpitsocialX" target="_blank" className="p-3 rounded-full bg-gold-500/10 hover:bg-gold-500/20 transition">
              <Twitter className="w-6 h-6 text-gold-500" />
            </a>
            <a href="https://instagram.com/arpitingram" target="_blank" className="p-3 rounded-full bg-gold-500/10 hover:bg-gold-500/20 transition">
              <Instagram className="w-6 h-6 text-gold-500" />
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}