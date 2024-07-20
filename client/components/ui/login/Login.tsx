"use client";

import axios from "axios";
import "../../../app/globals.css";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IconAirbnbLogo } from "../icons/IconAirbnbLogo";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/auth/login/", {
            username: username,
            password: password
        }).then(res => {
            localStorage.setItem("token", res.data.token);
            router.push("/dashboard")
        }).catch(err => {
            if (err.response) {
                alert("Invalid credentials");
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
        })
    }
    return (
        <>
            <div className=" flex items-center justify-center h-screen bg-red-50">
                <form className="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-16 mb-4" onSubmit={handleLogin}>
                    < a href="/">
                        <IconAirbnbLogo />
                    </a>
                    <div className="text-center text-3xl my-5 font-semibold">Login</div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-lg font-bold mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-sky-500 focus:ring-1"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-sky-500 focus:ring-1"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                    <a href="./registration" className="text-center text-blue-600 underline">Don&apos;t have an account? Register</a>
                </form>
            </div>
        </>
    )
}