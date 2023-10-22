<?php

namespace App\Livewire;

use Livewire\Component;

class ContactForm extends Component
{
    public $firstname;

    public $lastname;

    public $email;

    public $problem;


    public function save()
    {
        ray($this);
    }
    public function render()
    {
        return view('livewire.contact-form');
    }
}
