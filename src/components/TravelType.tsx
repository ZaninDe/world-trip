import Image from 'next/image'

interface TravelTypeProps {
  image: JSX.Element,
  description: string,
}

export const TravelType = ({ image, description }: TravelTypeProps): JSX.Element => {
  return (
    <div>
      <div>
        {image}
      </div>
      <h3>{description}</h3>
    </div>
  )
}
