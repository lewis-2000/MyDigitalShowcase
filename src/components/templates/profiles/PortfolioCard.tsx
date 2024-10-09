import React from 'react';

interface SocialLink {
  platform: string;
  url: string;
}

interface ProfileCardProps {
  profileImage: string;
  name: string;
  title: string;
  bio: string;
  socialLinks: SocialLink[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileImage, name, title, bio, socialLinks }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <img className="w-32 h-32 rounded-full mx-auto" src={profileImage} alt={`${name}'s profile`} />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
        <p className="mt-2 text-gray-700">{bio}</p>
        <div className="mt-4 flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
