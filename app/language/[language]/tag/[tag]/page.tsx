import { Layout } from "@/components/Layout";
import { RepositoryList } from "@/components/Repository/RepositoryList";
import { getData } from "app/data-loader";
import { Metadata } from "next";

type Params = Promise<{ language: string; tag: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const data = getData();
  const languageSlug = decodeURI((await params).language);
  const tagSlug = decodeURI((await params).tag);
  const tag = data.tags.find((t) => t.id === tagSlug);
  const language = data.languages.find((l) => l.id === languageSlug);

  return {
    title: `Language ${language?.display} and Tag ${tag?.display}`,
  };
}

export default async function Page({ params }: { params: Params }) {
  return (
    <Layout>
      <RepositoryList
        languageId={(await params).language}
        tagId={(await params).tag}
      />
    </Layout>
  );
}
