@extends('layouts.app', [
    'title' => 'Owner',
    'footer' => true,
    'navbar' => true,
])

@section('content')
    <div class="w-full p-4 lg:p-20 min-h-full"> 
        <div class="grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-4 gap-4">       
            @foreach ($owners as $owner)
                @php $owner = (object) $owner; @endphp
                    <div class="rounded overflow-hidden shadow-xl bg-white relative">
                        <img class="w-full" src="{{ $owner->avatar ? $owner->avatar : "https://ui-avatars.com/api/?name=" . $owner->name }}" alt="Owner Avatar">
                        <div class="px-6 py-4 mb-15">
                            <div class="font-bold text-xl mb-2">{{ $owner->name }}</div>
                            <p class="text-gray-500 text-base">
                                {{ $owner->description ? $owner->description : \Illuminate\Foundation\Inspiring::quote() }}
                            </p>
                        </div>
                        <div class="px-6 py-4 absolute bottom-0">
                            @foreach ($owner->skills as $skill)
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700 mr-2">
                                #{{ str_replace(' ', '_', strtolower($skill)) }}
                            </span>                                
                            @endforeach
                        </div>
                    </div>
            @endforeach
        </div>
    </div>
@stop