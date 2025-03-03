<template>
    <img width="150" class="dark:hidden inline-block" src="https://cdn.imjol.com/MagicLMS/Logo.png" />
    <!-- <img width="120" class="dark:inline-block hidden" src="/logo-dark.png"/> -->
</template>

<style>
@media (min-width: 1024px) {
    .block-hero .layout {
        gap: var(--space-8);
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    }

    .block-hero .support {
        grid-column-start: 3;
        grid-column-end: 5;
    }
}
</style>
