import { useState, type FormEvent } from "react";
import { MessageSquare, Send, X } from "lucide-react";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setSent(false);
        }}
        className="rounded-full px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 motion-reduce:transition-none"
      >
        Contact
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="contact-title">
          <div className="w-full max-w-lg rounded-[2rem] border border-cyan-300/20 bg-slate-900 p-6 text-left shadow-2xl shadow-black/40">
            <div className="flex items-start justify-between gap-4">
              <div className="grid size-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                <MessageSquare aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-slate-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                aria-label="Close contact popup"
              >
                <X size={18} />
              </button>
            </div>

            <h2 id="contact-title" className="mt-5 text-2xl font-black text-white">Contact Tankistebi</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Send a note about missions, classroom use, or account progress. This placeholder form stays inside the app.
            </p>

            {sent ? (
              <div className="mt-6 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-emerald-100">
                Message staged. A real backend can be connected here later.
              </div>
            ) : (
              <form onSubmit={submitContact} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-bold text-slate-200">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-sm font-bold text-slate-200">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40"
                    placeholder="Tell us what you need..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Send size={18} /> Send placeholder
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ContactUs;
