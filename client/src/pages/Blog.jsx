import { useEffect, useState } from "react";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import moment from "moment";

const Blog = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({ name: "", content: "" });

    const fetchBlogData = async () => {
        const blogData = blog_data.find(item => item._id === id);
        setData(blogData);
        
        // Filter comments for this blog - show all comments for now (remove isApproved filter)
        const blogComments = comments_data.filter(comment => comment.blog._id === id);
        setComments(blogComments);
        console.log("Blog ID:", id);
        console.log("Filtered comments:", blogComments);
    };

    useEffect(() => {
        fetchBlogData();
    }, [id]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        
        // Create new comment object
        const newComment = {
            _id: Date.now().toString(), // Generate a temporary ID
            blog: data,
            name: comment.name,
            content: comment.content,
            isApproved: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            __v: 0
        };
        
        // Add new comment to the comments list
        setComments([newComment, ...comments]);
        
        // Log the comment (in a real app, this would be sent to a backend)
        console.log("Comment submitted:", newComment);
        
        // Reset form
        setComment({ name: "", content: "" });
        
        // Show success message (optional)
        alert("Comment submitted successfully! It will appear after approval.");
    };

    return data ? (
        <div className="relative bg-[#f9fafb] min-h-screen">
            <img src={assets.gradientBackground} className="absolute top-0 left-0 w-full -z-1 opacity-50" alt="background" />
            <Navbar />

            {/* Blog Header Section */}
            <div className="mx-auto max-w-4xl px-6 sm:px-10 py-12 text-center">
                <p className="text-primary text-sm font-semibold mb-5 tracking-wide">
                    Published on {moment(data.createdAt).format('MMMM Do YYYY')}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 px-4">
                    {data.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                    {data.subTitle}
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/5 border border-primary/30 rounded-full text-primary font-semibold text-sm">
                    <span>Michael Brown</span>
                </div>
            </div>

            {/* Blog Image */}
            <div className="mx-auto max-w-5xl px-6 sm:px-10 mb-12">
                <img 
                    src={data.image} 
                    alt={data.title}
                    className="w-full rounded-2xl shadow-lg"
                />
            </div>

            {/* Blog Content */}
            <div className="mx-auto max-w-3xl px-6 sm:px-10 mb-20">
                <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 "
                    dangerouslySetInnerHTML={{ __html: data.description }}
                    style={{ 
                        lineHeight: '1.8',
                    }}
                />
            </div>

            {/* Comment Section */}
            <div className="mx-auto max-w-2xl px-6 sm:px-10 pb-20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Comments ({comments.length})</h3>
                
                {/* Display existing comments */}
                {comments.length > 0 && (
                    <div className="space-y-6 mb-12">
                        {comments.map((commentItem) => (
                            <div key={commentItem._id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <img src={assets.user_icon} alt="user" className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h5 className="font-semibold text-gray-900">{commentItem.name}</h5>
                                            <span className="text-xs text-gray-500">
                                                {moment(commentItem.createdAt).fromNow()}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{commentItem.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                <div className="mt-10">
                    <h4 className="text-2xl font-bold text-gray-900 mb-8">Add your comment</h4>
                    <form onSubmit={handleCommentSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={comment.name}
                                onChange={(e) => setComment({ ...comment, name: e.target.value })}
                                required
                                className="w-full px-6 py-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Comment"
                                value={comment.content}
                                onChange={(e) => setComment({ ...comment, content: e.target.value })}
                                required
                                rows="7"
                                className="w-full px-6 py-4 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-12 py-3.5 bg-primary text-white font-semibold text-base rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Social Share Section */}
                <div className="mt-20">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Share this article on social media</h4>
                    <div className="flex gap-5">
                        <button className="w-14 h-14 rounded-full bg-[#1877f2]/10 flex items-center justify-center hover:bg-[#1877f2]/20 transition-all">
                            <svg className="w-6 h-6 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </button>
                        <button className="w-14 h-14 rounded-full bg-[#1da1f2]/10 flex items-center justify-center hover:bg-[#1da1f2]/20 transition-all">
                            <svg className="w-6 h-6 text-[#1da1f2]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </button>
                        <button className="w-14 h-14 rounded-full bg-[#ea4335]/10 flex items-center justify-center hover:bg-[#ea4335]/20 transition-all">
                            <svg className="w-6 h-6 text-[#ea4335]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    ) : (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">Loading...</p>
            </div>
        </div>
    );
};

export default Blog;
