"use client";

import '../../../../../app/globals.css';
import Head from 'next/head';
import Navbar from '@/components/ui/navbar/Navbar';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { IconAirbnbLogo } from '@/components/ui/icons/IconAirbnbLogo';

export default function RegistrationPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isHost, setIsHost] = useState(false);
    const router = useRouter();

    const handleRegistration = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password1 !== password2) {
            alert("Passwords do not match");
            return;
        }

        axios.post("http://localhost:3000/api/auth/registration/", {
            email: email,
            username: username,
            password: password1,
            password2: password2,
        }).then((res) => {
            localStorage.setItem("token", res.data.token);
            router.push("./login");
        }).catch((err) => {
            if (err.response) {
                alert("Invalid credentials");
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
        });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-red-50">
            <div className="w-full max-w-lg">
                <form
                    className="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-16 mb-4"
                    onSubmit={handleRegistration}
                >
                    <a href="/">
                        <IconAirbnbLogo />
                    </a>
                    <div className="text-center text-3xl my-5 font-semibold">Register</div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-lg font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-sky-500 focus:ring-1"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-lg font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-sky-500 focus:ring-1"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-lg font-bold mb-2"
                            htmlFor="password1"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-sky-500 focus:ring-1"
                            id="password1"
                            type="password"
                            placeholder="Password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-lg font-bold mb-2"
                            htmlFor="password2"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-sky-500 focus:ring-1"
                            id="password2"
                            type="password"
                            placeholder="Confirm Password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                    <a href="/login" className="text-blue-600 underline">
                        Already have an account? Login
                    </a>
                </form>
            </div>
        </div>
    )
}