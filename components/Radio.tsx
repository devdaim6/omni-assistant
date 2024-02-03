import { RadioGroup, Radio } from '@nextui-org/react'
import { FC } from 'react'

interface RadioProps {
    option: string,
    setOption: any
}

const RadioInput: FC<RadioProps> = ({ option, setOption }) => {
    return <>
        <RadioGroup
            orientation="horizontal"
            label="Select your Option"
            value={option}
            onValueChange={setOption}
        >
            <Radio value="text" >
                <span className='text-white'>Text</span>
            </Radio>
            <Radio value="image" >
                <span className='text-white'>Image</span>
            </Radio>
        </RadioGroup></>
}

export default RadioInput