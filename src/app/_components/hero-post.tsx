
import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { Author } from "../../interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";


type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
    caption?: string;
};

export function HeroPost({
    title,
    coverImage,
    excerpt,
    slug,
    caption
}: Props) {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage title={title} src={coverImage} slug={slug} caption={caption}/>
            </div>
            <div className="font-alice md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                        <Link href={`/posts/${slug}`} className="hover:underline">
                            {title}
                        </Link>
                    </h3>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                </div>
            </div>
        </section>
    );
}
