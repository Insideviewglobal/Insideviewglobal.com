
    <header
        class="relative h-24 bg-slate-100 w-screen"
        x-data="{ mobileMenuOpen: false }"
    >
        <!-- Main navbar for large screens -->
        <div
            class="md:pl-10 lg:pl-24 relative z-30 mx-auto flex h-full items-center border-b border-gray-secondary-300/60 bg-slate-50 px-4 sm:px-6 lg:px-8"
        >
            <nav class="flex w-full items-center justify-between">
                <div class="flex items-center space-x-8 lg:space-x-12">
                    <!-- Logo-->
                    <a
                        href="/index"
                        aria-label="Home"
                        class="pl-5 flex flex-shrink-0 items-center"
                    >
                        <img
                            src="/assets/images/logo_color.svg"
                            class="hidden h-10 w-auto sm:h-8 md:hidden sm:hidden lg:block lg:h-11"
                        />
                        <img
                            src="/assets/images/logo_color.svg"
                            class="hidden h-7 w-auto sm:hidden md:block lg:hidden"
                        />
                        <img
                            src="/assets/images/logo_text_color.svg"
                            class="h-12 w-auto sm:block md:hidden lg:hidden"
                        />
                    </a>

                    <div class="hidden items-center space-x-3 md:flex lg:space-x-4">
                        <a
                            href="/index"
                            class="inline-block px-4 py-2 font-medium text-slate-700 hover:underline hover:text-slate-900"
                        >
                            Home
                        </a>
                        <a
                            href="/solutions"
                            class="inline-block px-4 py-2 font-medium text-slate-700 hover:underline hover:text-slate-900"
                        >
                            Solutions
                        </a>
                        <a
                            href="/contact"
                            class="inline-block px-4 py-2 font-medium text-slate-700 hover:underline hover:text-slate-900"
                        >
                            Contact Us
                        </a>

                    </div>
                </div>
            </nav>
        </div>

        <!-- Mobile Menu-->
        <div class="md:hidden">
            <div
                x-show="mobileMenuOpen"
                x-transition:enter="duration-200 ease-out"
                x-transition:enter-start="opacity-0"
                x-transition:enter-end="opacity-100"
                x-transition:leave="duration-200 ease-in"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
                class="fixed inset-0 z-20 bg-slate-900 bg-opacity-25 backdrop-blur"
            ></div>

            <div
                x-show="mobileMenuOpen"
                x-transition:enter="duration-300 ease-out"
                x-transition:enter-start="opacity-0 scale-95"
                x-transition:enter-end="opacity-100 scale-100"
                x-transition:leave="duration-200 ease-in"
                x-transition:leave-start="opacity-100 scale-100"
                x-transition:leave-end="opacity-0 scale-95"
                class="absolute inset-x-0 top-24 z-30 overflow-hidden bg-slate-100 px-5 pb-8 pt-4 duration-300"
                @click.away="mobileMenuOpen = false"
            >
                <div>
                    <div>
                        <div class="flex flex-col divide-y divide-gray-secondary-400/75">
                            <a
                                href="/index"
                                class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900"
                            >
                                Home
                            </a>

                            <a
                                href="/solutions"
                                class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900"
                            >
                                Solutions
                            </a>

                            <a
                                href="/contact"
                                class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900"
                            >
                                Contact Us
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

