import BlogPosts from "./BlogPosts";
import BlogSidebar from "./BlogSidebar";

const Blog = ({posts}) => {
    return (
        <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-lg-0 mt-5 order-2 order-lg-1">
                <BlogSidebar />
            </div>
            <div className="col-lg-8 order-1 order-lg-1">   
                |<BlogPosts posts={posts} />
                <div className="row">
                    <div className="col-12 text-center mt-4 mt-md-5">
                        <nav>
                            <ul className="pagination justify-content-center mb-0">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <span className="page-link">
                                    1
                                    <span className="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;