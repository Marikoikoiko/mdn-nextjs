import CoverImage from "./cover-image";
import { PostTitle } from "./post-title";
type Props = {
  title: string;
  coverImage: string;
  caption?: string;
};

export function PostHeader({ title, coverImage, caption }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} caption={caption}/>
      </div>
      <div className="max-w-2xl mx-auto">
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
      </div>
    </>
  );
}
