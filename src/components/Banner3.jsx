import React from "react";
import banner from "../assets/Banner.png";
function Banner3() {
    return (
        <>
            <div className=" dark:bg-slate-900 dark:text-white  max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
                    <div className="space-y-8">
                        <div className="">
                            <div className="container">
                                <form
                                    action="https://formspree.io/f/mvoeyvkn"
                                    method="POST"
                                    className=" mt-4 space-y-2 border ">
                                    {/* <span>Email</span> <br />
                                    <input type="email" placeholder='Enter your email'
                                        className='w-80 px-3 py-1 border rounded-md outline-none'
                                        {...register("email", { required: true })}
                                    />
                                    <br />
                                    {errors.email && (
                                        <span className='text-sm text-red-500'>
                                            This field is required
                                        </span>)} */}
                                    <span>UserName</span> 
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        autoComplete="off"
                                        required
                                        className='w-80 px-3 py-1 border border-black rounded-md outline-none mx-2.5'
                                    />
                                    <br />
                                    <span className="m-2.5">Email Id</span>
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Email"
                                        autoComplete="off"
                                        required
                                        className='w-80 px-4 py-1 border border-black rounded-md outline-none mx-2.5'
                                    />
                                    <br />
                                    <span className="m-2">Message </span>

                                    <textarea
                                        name="message"
                                        cols="30"
                                        rows="6"
                                        placeholder="Enter your Message"
                                        autoComplete="off"
                                        required
                                        className='w-80 px-4 py-1 border border-black rounded-md outline-none mx-2.5'
                                        ></textarea>
                                    <br />

                                    <input className='my-9 bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' type="submit" value="send" />
                                </form>
                            </div>
                        </div>

                    </div>
                    {/* <button className="btn mt-6 btn-secondary">Get Started</button> */}
                </div>
                <div className="my-4 order-1 w-full mt-20 md:w-1/2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14155.419510688982!2d77.65072558715822!3d27.504888400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371719a7a6a6f%3A0x79b85cb6bed8db11!2sShri%20Krishna%20Janmasthan!5e0!3m2!1sen!2sin!4v1715673073668!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
}

export default Banner3;
