// app/competitions/page.tsx
'use client';
import Card from "@/components/Card";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Competition {
    id: string;
    image: string;
}

const competitions: Competition[] = [
    {
        id: 'astro-photography',
        image: '/images/competitions/astro-photography.png'
    },
    {
        id: 'math-expo',
        image: '/images/competitions/math-expo.png'
    },
    
];

const CompetitionCard = ({ competition }: { competition: Competition }) => {
    const router = useRouter();

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={() => router.push(`/competitions/${competition.id}`)}
            className="cursor-pointer relative w-full h-[400px] max-w-[500px] overflow-hidden rounded-lg"
        >
            <Image
                src={competition.image}
                alt={competition.id}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </motion.div>
    );
};

export default function Competitions() {
    return (
        <div className="min-h-screen bg-center bg-fixed flex justify-center items-center pt-32">
            <Card title="Competitions">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
                    {competitions.map((competition) => (

                        <CompetitionCard 
                            key={competition.id} 
                            competition={competition}
                        />
                    ))}
                </div>
            </Card>
        </div>
    );
}