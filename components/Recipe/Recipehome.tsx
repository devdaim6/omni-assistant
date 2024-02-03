"use client"
import { FC, useState } from 'react'
import TextArea from '../Form/TextArea'
import { Button, Tooltip } from '@nextui-org/react';
import { IconCopy, IconSend2 } from '@tabler/icons-react';
import { generateRecipeThroughImage, generateRecipeThroughPrompt } from '@/utils/generateRecipe';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { IconCopyCheck } from '@tabler/icons-react';
import FileInput from '../Form/FileInput';
import RadioInput from '../Radio';
import { toast } from 'sonner';

const Recipehome: FC = ({ }) => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState('');
    const [result, setResult] = useState("");
    const [option, setOption] = useState("text");
    const [copied, setCopied] = useState(false);

    const handleRecipeGeneration = async () => {

        if (option == 'text') {

            if (!prompt) {
                toast.error("Prompt Is Required")
                return
            }
            await generateRecipeThroughPrompt(prompt, (generatedText: string) => {
                setResult(generatedText);
            });
        }
        else {
            if (!image) {
                toast.error("Image Is Mandatory")
                return
            }
            await generateRecipeThroughImage(image, (generatedText: string) => {
                setResult(generatedText);
            });
        }
    };
    const copyResult = async () => {
        setCopied(true)
        navigator.clipboard.writeText(result)
        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }

    return <>
        <div className="flex flex-col w-screen space-y-8 my-10">
            <div className="flex justify-center">
                <RadioInput option={option} setOption={setOption} />
            </div>
            <div className="flex gap-2 prompt flex-grow">
                {option == "text" ?
                    (<TextArea value={prompt} setValue={setPrompt} className="flex-grow" />) : (<FileInput image={image} setImage={setImage} />)}
                <div className='ml-auto'>
                    <Button onClick={handleRecipeGeneration} variant='ghost' className='border-none'><IconSend2 color='white' /></Button>
                </div>
            </div>

            <div className="result min-h-screen h-full text-white">
                <div className="flex justify-end">
                    {result && <Tooltip
                        delay={0}
                        closeDelay={2000}
                        content={copied ? 'copied' : 'copy'} >
                        <Button
                            onClick={copyResult}
                            variant='bordered'
                            className='border-none text-white'>
                            {!copied ? <IconCopy />
                                : <IconCopyCheck />
                            }</Button>
                    </Tooltip>}
                </div>
                <Markdown remarkPlugins={[remarkGfm]}>{result}</Markdown>
            </div>
        </div>
    </>
}

export default Recipehome