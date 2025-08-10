import React from 'react';
import { Link } from 'react-router-dom';

interface LinkItem {
  title: string;
  link: string;
}

interface FooterCardProps {
  data: {
    title: string;
    links: LinkItem[];
  };
}

const FooterCard: React.FC<FooterCardProps> = ({ data }) => {
  return (
    <div className="mb-7">
      <h2 className="text-lg font-bold text-white mb-4">{data.title}</h2>
      <div className="flex flex-col gap-3">
        {data.links.map((link, index) => (
          <div key={index} className="text-sm cursor-pointer text-base-content hover:text-primary transition-all duration-200">
            <Link to={link.link}>{link.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterCard;
