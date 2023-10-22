<?php

namespace App\Livewire;

use App\Mail\WebsiteContactForm;
use Illuminate\Support\Facades\Mail;
use Livewire\Attributes\Rule;
use Livewire\Component;

class ContactForm extends Component
{
    #[Rule('required')]
    public string $firstname;

    #[Rule('required')]
    public string $lastname;

    #[Rule('required','email')]
    public string $email;

    #[Rule('required')]
    public string $problem;

    public function save()
    {
        ray($this);
        ray($this->email);
        $this->validate();
        $mail =  Mail::to('hola@insideviewglobal.com')
            ->queue(new WebsiteContactForm($this->firstname, $this->lastname, $this->email, $this->problem));
    }
    public function render()
    {
        return view('livewire.contact-form');
    }
}
