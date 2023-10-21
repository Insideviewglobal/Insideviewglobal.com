<!-- Map -->
<section class="relative bg-vanilla py-16 sm:py-20">
    <!-- Container -->
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div
            class="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none"
        >
            <!-- Heading -->
            <div class="flex flex-col items-center lg:items-start">
                <h1
                    class="mt-3 text-center text-4xl font-semibold leading-snug text-slate-900 sm:mt-4 sm:max-w-xl sm:text-[40px] sm:leading-snug md:mx-auto lg:mx-0 lg:text-left"
                >
                    Contact Form
                </h1>
            </div>

            <!-- Map -->
            <div class="relative mt-12 sm:mt-16 lg:mt-20">


                <!-- Address Card -->
                <div
                    class="flex flex-col border border-blue-400/60 bg-blue-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:absolute lg:right-0 lg:top-1/2 lg:w-1/3 lg:-translate-y-1/2 lg:flex-col lg:items-start"
                >
                    <div>
                        <h3 class="text-2xl font-semibold text-slate-900">
                            Do you need specific help?
                        </h3>
                        <p class="mt-5 leading-relaxed text-slate-700">
                            We listen and work closely with you. Our aim is to automate processes, saving you time and reducing costs. We are a group of ambitious individuals committed to achieving success together.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<div>
    <!-- Heading -->
    <div class="flex flex-col items-center lg:items-start">
        <h1
            class="mt-3 text-center text-4xl font-semibold leading-snug text-slate-900 sm:mt-4 sm:max-w-xl sm:text-[40px] sm:leading-snug md:mx-auto lg:mx-0 lg:text-left"
        >
            Contact Form
        </h1>
    </div>
    <form wire:submit="save">
        <input type="text" wire:model="first_name">

        <input type="text" wire:model="last_name">

        <input type="email" wire:model="email">

        <input type="textarea" wire:model="problem_statement">

        <button type="submit">Save</button>
    </form>
</div>
