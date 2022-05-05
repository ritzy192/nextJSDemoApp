import { useRouter } from "next/router";

function DetailPage () {
    const router = useRouter();
    console.log(router.query.newsId)
  return (
    <div>DetailPage </div>
  )
}

export default DetailPage 