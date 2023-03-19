<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <!-- <li>
        <router-link to="/settings">Settings</router-link>
      </li>
      <li>
        <router-link to="/logout">Logout</router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  background-color: #f5f5f5;
  height: 100%;
  padding: 1rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #666;
}
</style>
