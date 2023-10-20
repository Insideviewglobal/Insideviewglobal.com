<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg">
        <link rel="icon" type="image/png" href="/assets/images/favicon.png">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <!-- Fathom - beautiful, simple website analytics -->
        <script src="https://cdn.usefathom.com/script.js" data-site="JLBYCWSF" defer></script>
        <!-- / Fathom -->
    </head>
    <body class="font-sans text-gray-900 antialiased">
        <div class="min-h-screen w-full flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100">
            <x-navigation></x-navigation>
            <div class="w-full pb-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {{ $slot }}
            </div>
        </div>
        @livewireScripts
    </body>
</html>
