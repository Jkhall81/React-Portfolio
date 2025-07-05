"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { lusitana } from "@/utils/fonts";
import { useForm } from "react-hook-form";
import formSchema from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LitButton } from "./ui/LitButton";

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const labelClass = `text-xl text-pink-400 ${lusitana.className}`;
  const inputClass =
    "bg-black border border-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white rounded-md px-4 py-2";

  return (
    <Form {...form}>
      <form
        action="https://getform.io/f/954d706a-56a6-48ab-8b04-3c01d8278bd1"
        method="POST"
        className="space-y-6"
      >
        {/* Row 1: Name + Phone */}
        <div className="flex flex-col sm:flex-row gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={labelClass}>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name..."
                    className={inputClass}
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={labelClass}>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your digits..."
                    className={inputClass}
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email..."
                  className={inputClass}
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="subject..."
                  className={inputClass}
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="message body..."
                  rows={7}
                  className={`${inputClass} resize-none`}
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center pt-4">
          <LitButton
            title="Send Message"
            type="submit"
            classNames="w-[300px] sm:w-[400px]"
          />
        </div>
      </form>
    </Form>
  );
};
