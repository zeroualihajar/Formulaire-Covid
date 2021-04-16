
@component('mail::message')
# Change password request

Click on the button to change password.


@component('mail::button', ['url' => $baseUrl.$token])
Reset password
@endcomponent

Thanks<br>

@endcomponent


