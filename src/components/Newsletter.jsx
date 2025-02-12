import React from "react";
import Swal from "sweetalert2";

export default function Newsletter() {
  const handleForm = e => {
    e.preventDefault();
    Swal.fire({
      title: "Success",
      text: "You are successfully subscribe",
      icon: "success",
    });
    e.target.reset()
  };
  return (
    <div className="bg-newsletter bg-cover bg-no-repeat h-[50vh] bg-fixed">
      <div className="bg-gradient-to-t from-[#00000056] to-[#0000005c] w-full h-full flex flex-col justify-center items-center text-white">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold">Subscribe Our NewsLatter</h2>
          <form onSubmit={handleForm}>
            <label >
              <input
                type="text" name="subscribe"
                placeholder="Subscribe..."
                className=" bg-transparent border-b-2 leading-10 text-white mb-6 md:w-full"
                required
              />
              <br />
            </label>
            <button className=" btn bg-black text-white text-center border-none">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
