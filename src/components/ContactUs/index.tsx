import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactImage from "@/assets/customer-service.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({ contact: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsOpen(false);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate("/"); 
    }, 2000);

    setFormData({ contact: "", message: "" });
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg">
          Thanks for your feedback!
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <h1
            className="text-white font-semibold hover:underline hover:cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Contact Us
          </h1>
        </DialogTrigger>

        <DialogContent className="px-0 max-w-lg sm:max-w-xl">
          <DialogHeader>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center sm:justify-center gap-5 p-6"
            >
              <div className="flex flex-col justify-start h-full text-lg text-white font-semibold">
                <h1 className="text-center text-2xl pb-5 sm:pb-10">Write us your feedback</h1>
                
                <div className="flex flex-col gap-4">
                  <Input
                    type="text"
                    placeholder="Your Email or Phone"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                  
                  <Textarea
                    className="w-80 max-h-9 overflow-hidden resize-none"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  
                  <Button type="submit" className="mt-3">Submit</Button>
                </div>
              </div>
              
              <img src={ContactImage} alt="Contact" className="w-40 sm:w-50" />
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactUs;
