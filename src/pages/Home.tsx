import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Clock, Star, Users } from 'lucide-react';
import Footer from '../components/common/Footer.tsx';
import ReviewsSlider from '../components/common/ReviewsSlider.tsx';
import Spinner from '../components/common/Spinner.tsx';
import { getAllReviews } from '../services/operations/otherServices';

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

  return (
    <div className="bg-base-100 text-base-content font-8bit">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)',
            opacity: 0.1,
          }}
        ></div>
        <div className="relative z-20 flex flex-col items-center gap-6 p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Unlock the Universe of Knowledge</h1>
          <p className="max-w-3xl text-lg md:text-xl text-base-content">
            Join thousands of learners on GS Academia and start mastering new skills today.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/signup">
              <Button size="lg" variant="primary">Start Your Mission</Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline">Explore the Galaxy</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Featured Expeditions</h2>
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-base-200 border-primary/20">
                    <CardHeader>
                      <img src={`https://picsum.photos/seed/${index}/400/200`} alt="Course thumbnail" className="rounded-t-lg" />
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary">Galaxy</Badge>
                      <CardTitle className="mt-2 text-white">Cosmic Course {index + 1}</CardTitle>
                      <div className="flex items-center gap-2 mt-2 text-base-content">
                        <Star className="w-4 h-4 text-primary" />
                        <span>4.5 (1,200 explorers)</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-lg text-primary">$49.99</span>
                        <Button variant="primary">Launch</Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why GS Academia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-base-300 border-secondary/20">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-white">Expert Astronauts</CardTitle>
                <p className="mt-2 text-base-content">Learn from the best in the universe.</p>
              </CardContent>
            </Card>
            <Card className="bg-base-300 border-secondary/20">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-white">Flexible Orbits</CardTitle>
                <p className="mt-2 text-base-content">Learn at your own pace, anytime, anywhere.</p>
              </CardContent>
            </Card>
            <Card className="bg-base-300 border-secondary/20">
              <CardHeader>
                <Users className="w-12 h-12 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-white">Vibrant Galaxy</CardTitle>
                <p className="mt-2 text-base-content">Join a community of learners and mentors.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Transmissions from Our Explorers</h2>
          {loading ? <Spinner /> : <ReviewsSlider reviews={reviews} />}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
