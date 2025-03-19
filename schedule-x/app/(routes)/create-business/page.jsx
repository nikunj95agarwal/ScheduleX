"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

function CreateBusiness() {
    const [businessName, setBusinessName] = useState("");
    const db = getFirestore(app);
    const { user } = useKindeBrowserClient();
    const router = useRouter();

    /**
     * Creates a new business and saves it in Firebase.
     */
    const onCreateBusiness = async () => {
        try {
            console.log("Creating business:", businessName);

            await setDoc(doc(db, 'Business', user.email), {
                businessName: businessName.trim().replace(/\s+/g, "_"),
                email: user.email,
                userName: `${user.given_name} ${user.family_name}`
            });

            console.log("Document Saved");
            toast.success('New Business Created!');
            router.replace('/dashboard');
        } catch (error) {
            console.error("Error creating business:", error);
            toast.error('Failed to create business. Please try again.');
        }
    };

    return (
        <div className='p-14 items-center flex flex-col gap-20 my-10'>
            <Image src='/logo.svg' width={200} height={200} alt="Business Logo"/>
            <div className='flex flex-col items-center gap-4 max-w-3xl'>
                <h2 className='text-4xl font-bold'>What should we call your business?</h2>
                <p className='text-slate-500'>You can always change this later from settings</p>
                
                <div className='w-full'>
                    <label className='text-slate-400'>Team Name</label>
                    <Input 
                        placeholder="Ex. TubeGuruji" 
                        className="mt-2"
                        value={businessName}
                        onChange={(event) => setBusinessName(event.target.value)}
                    />
                </div>

                <Button 
                    className="w-full"
                    disabled={!businessName.trim()}
                    onClick={onCreateBusiness}
                >
                    Create Business
                </Button>
            </div>
        </div>
    );
}

export default CreateBusiness;
