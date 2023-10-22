<div>
    <form wire:submit="save">
        <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                <div class="mt-1">
                    <input wire:model="firstname" type="text" id="firstname" name="firstname" autocomplete="given-name" class="block w-full rounded-t-md border-0 border-b border-slate-300 border-transparent shadow-sm focus:border-indigo-600 focus:ring-0 focus:border-b-2 sm:text-sm">
                    @error('firstname') <em>{{ $message }}</em>@enderror
                </div>
            </div>

            <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                <div class="mt-1">
                    <input wire:model="lastname" type="text" id="lastname" name="lastname" autocomplete="family-name" class="block w-full rounded-t-md border-0 border-b border-slate-300 border-transparent shadow-sm focus:border-indigo-600 focus:ring-0 focus:border-b-2 sm:text-sm">
                    @error('lastname') <em>{{ $message }}</em>@enderror
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-medium text-gray-700">Email Address</label>
                <div class="mt-1">
                    <input type="email" name="email" id="email" class="block w-full rounded-t-md border-0 border-b border-slate-300 border-transparent shadow-sm focus:border-indigo-600 focus:ring-0 focus:border-b-2 sm:text-sm">
                    @error('email') <em>{{ $message }}</em>@enderror
                </div>
            </div>

            <div class="sm:col-span-2">
                <div class="border-b border-gray-200 focus-within:border-indigo-600">
                    <label for="problem" class="sr-only">Tell us about how we can help</label>
                    <textarea wire:model="problem" rows="3" name="problem" id="problem" class="block w-full rounded-t-md resize-none border-0 border-b border-slate-300 border-transparent p-2 pb-2 text-gray-900 placeholder:text-gray-600 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6" placeholder="How can we help..."></textarea>
                    @error('problem') <em>{{ $message }}</em>@enderror
                </div>
                <div class="flex justify-between pt-8">
                    <div class="flex-shrink-0">
                        <button type="submit" class="inline-flex items-center rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    </form>


</div>
