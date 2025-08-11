import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Clock, Star, Users, Code, BarChart, ShieldCheck, Palette, Briefcase, Database } from 'lucide-react';
import Footer from '../components/common/Footer.tsx';
import ReviewsSlider from '../components/common/ReviewsSlider.tsx';
import Spinner from '../components/common/Spinner.tsx';
import { getAllReviews } from '../services/operations/otherServices';
import StarryBackground from '../components/common/StarryBackground.tsx';

const Home: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      setLoading(true);
      const response = await getAllReviews();
      if (response) setReviews(response);
      setLoading(false);
    };
    fetchAllReviews();
  }, []);

  const domainsData = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: 'Web Development',
      description: 'Master front-end and back-end technologies.',
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: 'Data Science',
      description: 'Unlock insights from data with Python and R.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: 'Cybersecurity',
      description: 'Protect systems and networks from cyber threats.',
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: 'UI/UX Design',
      description: 'Create beautiful and user-friendly interfaces.',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: 'Business',
      description: 'Develop essential skills for the corporate world.',
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: 'Databases',
      description: 'Learn to manage and query relational databases.',
    },
  ];

  const whyChooseUsData = [
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: 'Expert Instructors',
      description: 'Learn from the best in the industry.',
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: 'Flexible Learning',
      description: 'Learn at your own pace, anytime, anywhere.',
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Vibrant Community',
      description: 'Join a community of learners and mentors.',
    },
  ];

  return (
    <div className="text-base-content font-sans">
      <StarryBackground />
      {/* Hero Section */}
      <section
  className="relative h-screen flex items-center justify-center text-center text-white"
  style={{
    animation: 'float 4s ease-in-out infinite'
  }}
>
  <style>
    {`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
    `}
  </style>

  <div className="relative z-10 flex flex-col items-center gap-6 p-4">
    <h1 className="text-4xl md:text-6xl font-bold text-glow">
      Unlock Your Potential
    </h1>
    <p className="max-w-3xl text-lg md:text-xl text-base-content/80">
      Join thousands of learners on GS Academia and start mastering new skills today.
    </p>
    <div className="flex gap-4 mt-4">
      <Link to="/signup">
        <Button size="lg" variant="primary">Start Your Journey</Button>
      </Link>
      <Link to="/courses">
        <Button size="lg" variant="outline">Explore Courses</Button>
      </Link>
    </div>
  </div>
</section>

      {/* Featured Courses Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">Explore Our Domains</h2>
            <p className="mt-3 text-lg text-base-content/80 max-w-2xl mx-auto">
              Choose a domain to start your learning journey in the field you're most passionate about.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domainsData.map((domain, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center flex flex-col items-center
                           transition-all duration-300 hover:border-primary/50 hover:bg-primary/5
                           animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">{domain.icon}</div>
                <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                <p className="text-base-content/70 flex-grow">{domain.description}</p>
                <Link to={`/courses/${domain.title.toLowerCase().replace(/\s+/g, '-')}`} className="mt-4">
                  <Button variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">Why GS Academia?</h2>
            <p className="mt-3 text-lg text-base-content/80 max-w-2xl mx-auto">
              Discover the advantages of learning with a platform designed for your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => (
              <Card
                key={index}
                className="bg-base-200 border-base-300 text-center p-6 flex flex-col items-center
                           transition-all duration-300 hover:bg-base-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
                           animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="p-0 mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle>{item.title}</CardTitle>
                  <p className="mt-2 text-base-content/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
            <p className="mt-3 text-lg text-base-content/80 max-w-2xl mx-auto">
              Real stories from real learners. See how GS Academia has impacted their journey.
            </p>
          </div>
          {loading ? <Spinner /> : <ReviewsSlider reviews={reviews} />}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
