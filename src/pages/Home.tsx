import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Star, 
  Users, 
  Code, 
  BarChart, 
  ShieldCheck, 
  Palette, 
  Briefcase, 
  Database,
  Sparkles,
  Zap,
  Target,
  Award,
  TrendingUp,
  Globe,
  Rocket
} from 'lucide-react';
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

  const domainsData = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Master modern web technologies and build stunning applications.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Data Science',
      description: 'Unlock insights from data with Python, R, and machine learning.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect systems and networks from evolving cyber threats.',
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-500/10 to-pink-500/10',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive, and user-centered experiences.',
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-500/10 to-violet-500/10',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Business',
      description: 'Develop essential skills for leadership and entrepreneurship.',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-500/10 to-amber-500/10',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Databases',
      description: 'Master data management and advanced querying techniques.',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-500/10 to-blue-500/10',
    },
  ];

  const whyChooseUsData = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Instructors',
      description: 'Learn from industry leaders and certified professionals.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Learning',
      description: 'Study at your own pace with lifetime access to content.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Global Community',
      description: 'Join millions of learners and build lasting connections.',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const statsData = [
    { icon: <Users className="w-6 h-6" />, value: '2M+', label: 'Active Learners' },
    { icon: <BookOpen className="w-6 h-6" />, value: '10K+', label: 'Courses Available' },
    { icon: <Globe className="w-6 h-6" />, value: '190+', label: 'Countries Reached' },
    { icon: <Award className="w-6 h-6" />, value: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="text-base-content font-sans animated-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="fade-in-up">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30 text-primary-300 font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to the Future of Learning
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in-up stagger-1">
            <span className="gradient-text">Unlock Your</span>
            <br />
            <span className="text-white">Potential</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-base-content/80 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up stagger-2">
            Join millions of learners worldwide and master the skills that matter. 
            From coding to design, business to data science - your journey starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-up stagger-3">
            <Link to="/signup">
              <Button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg group">
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 rounded-xl border-white/20 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore Courses
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in-up stagger-4">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30">
                    <div className="text-primary-400">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-base-content/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30 text-primary-300 font-medium">
              <Target className="w-4 h-4 mr-2" />
              Choose Your Path
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Explore Our</span>
              <br />
              <span className="text-white">Domains</span>
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Discover your passion and build expertise in cutting-edge fields that shape the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domainsData.map((domain, index) => (
              <div
                key={index}
                className={`group glass-card rounded-2xl p-8 card-hover fade-in-up stagger-${index + 1} relative overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${domain.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {domain.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 transition-all duration-300">
                    {domain.title}
                  </h3>
                  
                  <p className="text-base-content/70 mb-6 leading-relaxed">
                    {domain.description}
                  </p>
                  
                  <Link to={`/courses/${domain.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button 
                      variant="ghost" 
                      className="group/btn text-primary-400 hover:text-white hover:bg-primary-500/20 p-0 h-auto font-semibold"
                    >
                      Explore Courses
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30 text-primary-300 font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Experience</span>
              <br />
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Discover what makes GS Academia the preferred choice for millions of learners worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => (
              <Card
                key={index}
                className={`glass-card border-white/10 p-8 text-center card-hover fade-in-up stagger-${index + 1} group relative overflow-hidden`}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="p-0 mb-6 relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0 relative z-10">
                  <CardTitle className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 transition-all duration-300">
                    {item.title}
                  </CardTitle>
                  <p className="text-base-content/70 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30 text-primary-300 font-medium">
              <Star className="w-4 h-4 mr-2" />
              Student Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">What Our</span>
              <br />
              <span className="text-white">Students Say</span>
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Real stories from real learners. See how GS Academia has transformed careers and lives.
            </p>
          </div>
          
          <div className="fade-in-up stagger-2">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Spinner />
              </div>
            ) : (
              <ReviewsSlider reviews={reviews} />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Ready to</span>
              <br />
              <span className="gradient-text">Transform Your Future?</span>
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join millions of learners who have already started their journey to success. 
              Your future self will thank you.
            </p>
            <Link to="/signup">
              <Button className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-glow hover:shadow-glow-lg group">
                <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
                Start Learning Today
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;