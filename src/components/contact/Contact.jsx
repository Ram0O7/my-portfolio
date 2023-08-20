import React from "react";
import Button from "../../UI/Button/Button";

const Contact = () => {
  return (
    <div className="contact_form flex flex-col sm:flex-row justify-between gap-8 font-bold text-center sm:text-left">
      <div className="flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl">Contacts</h1>
        <p className="text-xs sm:text-sm max-w-sm text-text-primary">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form action="submit" className="flex flex-col gap-5 font-bold">
        <div>
          <input type="text" placeholder="name" required />
        </div>
        <div>
          <input type="email" placeholder="email" required />
        </div>
        <div>
          <textarea
            rows={4}
            cols={30}
            type="text"
            placeholder="message"
            className="resize-none"
            required
          />
        </div>
        <div className="self-end">
          <Button text={"send message"} url={"#"} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
