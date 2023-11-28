
<script>
  export let data;
  let { blog_post } = data;
</script>

  {#each data.blog_post as blog_post}
    <h1>{blog_post.title_names}
    </h1>
    <h2>Created by: {blog_post.author_name}</h2>
    <h3>
      Published on {blog_post.date_time}
    </h3>
    <div>
      <p>
        {blog_post.content_body}
      </p>
    </div>
    <div>
      <h2>
        Summary
      </h2>
      <p>
        {blog_post.summary}
      </p>
    </div>
    <h3>
      TAGS:
    </h3> 
    <p>
      {blog_post.blog_tags }
    </p>


  {/each}
