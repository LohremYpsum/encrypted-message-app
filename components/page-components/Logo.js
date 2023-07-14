import Image from 'next/image';

const Logo = ({width, height, src}) => {
  return (
    <div>
      <Image
        src={src} // Path to your logo image file
        alt="Logo" // Alt text for accessibility
        width={width} // Set the desired width of the logo
        height={height} // Set the desired height of the logo
      />
    </div>
  );
};

export default Logo;
