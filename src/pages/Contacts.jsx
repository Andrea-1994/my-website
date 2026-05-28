import { useState } from "react";
import CopyIcon from "../assets/icons/icon_copy.svg?react";
import LinkedinIcon from "../assets/icons/icon_linkedin.svg?react";
import InstagramIcon from "../assets/icons/icon_instagram.svg?react";
import DiscordIcon from "../assets/icons/icon_discord.svg?react";
import "./Contacts.scss";

export default function Contacts() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const message = e.target.message.value;

    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1200);
        e.target.reset();
      }
    } catch (err) {
      console.log(err);
      setError(true);
      setTimeout(() => setError(false), 2000);
    } finally {
      setLoading(false);
    }
  }

  const [copied, setCopied] = useState(false);
  async function handleCopy(textToCopy) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.log("copy failed", err);
    }
  }

  return (
    <div className="contacts">
      <h2 className="page-title">Send me a message</h2>
      <p className="page-subtitle">
        Give me feedback, or just tell me whatever you feel like. It’s
        anonymous, so leave a contact if you want me to reach you back.
      </p>
      <form onSubmit={sendMessage}>
        <textarea
          rows="5"
          cols="30"
          name="message"
          placeholder="Write your message..."
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
        {success && <div className="popup">Message sent ✔</div>}
        {error && (
          <div className="popup error">
            Ops... something went wrong :(
            <br></br>
            try again.
          </div>
        )}
      </form>

      <div className="card-info email">
        <h2>E-mail</h2>
        <div
          className="content"
          onClick={() => handleCopy("andrea-9_4@hotmail.it")}
        >
          {copied && <div className="popup">Copied ✔</div>}
          <p>
            andrea-9_4@hotmail.it
            <CopyIcon className="icon" />
          </p>
        </div>
      </div>

      <div className="card-info links">
        <h2>Links</h2>
        <div className="content">
          <a
            href="https://www.linkedin.com/in/andrea-di-lucia/"
            target="_blank"
            title="Andrea Di Lucia"
          >
            <LinkedinIcon className="icon" />
          </a>
          <a
            href="https://www.instagram.com/khiiron/"
            target="_blank"
            title="khiiron"
          >
            <InstagramIcon className="icon" />
          </a>
          <a
            href="https://www.instagram.com/khironart/"
            target="_blank"
            title="khironart"
          >
            <InstagramIcon className="icon" />
          </a>
          <a
            href="https://discord.com/users/270267022502395905"
            target="_blank"
            title="khiron_"
          >
            <DiscordIcon className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
