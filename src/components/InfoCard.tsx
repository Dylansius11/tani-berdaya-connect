
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  linkText: string;
  linkUrl: string;
  color: 'farmer' | 'consumer';
}

const InfoCard = ({ title, description, icon: Icon, linkText, linkUrl, color }: InfoCardProps) => {
  const colorClass = color === 'farmer' ? 'bg-farmer text-white' : 'bg-consumer text-white';
  
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader>
        <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Content can be added here */}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className={`p-0 ${color === 'farmer' ? 'text-farmer hover:text-farmer-dark' : 'text-consumer hover:text-consumer-dark'}`}>
          <Link to={linkUrl} className="flex items-center gap-2">
            {linkText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;
