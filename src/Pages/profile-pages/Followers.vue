<template>
    <ConnectionLayout>
        <template v-slot:connection-contents>
            <div>
                <h1>
                    Followers and Following hh
                </h1>
            </div>
        </template>
    </ConnectionLayout>
</template>

<script>
import ConnectionLayout from "../../Layouts/ConnectionLayout.vue";
export default {
    name: "Followers",
    components: {
        ConnectionLayout,
    },
};
</script>