
<script>
  export let data;
  let { blog_post } = data;
</script>





<ul>
  {#each data.blog_post as blog_post}
    <h1>{blog_post.title_names}
    </h1>
    <h2>{blog_post.author_name}</h2>
    <div>
      <p>
        {blog_post.content_body}
      </p>
    </div>
    <div>
      <p>
        {blog_post.summary}
      </p>
    </div>
    <p>
      {blog_post.blog_tags}
    </p>

  {/each}
</ul>

