"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    id: string;
    title: string;
    image: string;
    name: string;
    avatarUrl: string;
    userId: string;
}

const ProjectCard = ({id, title, image, name, avatarUrl, userId}:Props) => {

    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');

    useEffect(()=>{
        setRandomLikes(Math.floor(Math.random() * 1000))
        setRandomViews(String((Math.floor(Math.random() * 10000)/1000).toFixed(1)+'k'))
    },[]);

  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
        <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
            <Image 
                src={image}
                alt="Project Image"
                width={414}
                height={314}
                className="w-full h-full object-cover rounded-xl"
            />

            <div className="hidden group-hover:flex profile_card-title">
                <p className="w-full">{title}</p>
            </div>
        </Link>

        <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
            <Link href={`/profile/${userId}`} >
                <div className="flexCenter gap-2">
                    <Image 
                        src={avatarUrl}
                        alt="Profile Image"
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <p>{name}</p>
                </div>
            </Link>
            <div className="flexCenter gap-3">
                <div className="flexCenter gap-2">
                    <Image
                        src="/hearth.svg"
                        alt="Heart Icon"
                        width={13}
                        height={12}
                    />
                    <p className="text-sm">{randomLikes}</p>
                </div>
                <div className="flexCenter gap-2">
                    <Image
                        src="/eye.svg"
                        alt="eye Icon"
                        width={13}
                        height={12}
                    />
                    <p className="text-sm">{randomViews}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard