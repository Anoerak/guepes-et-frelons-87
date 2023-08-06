<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\UserInformations;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class DevFixtures extends Fixture
{

    private $passwordEncoder;

    // We inject the password encoder in the constructor
    public function __construct(UserPasswordHasherInterface $PassEncoder)
    {
        $this->passwordEncoder = $PassEncoder;
    }

    public function user(ObjectManager $manager): void
    {
        // We create 3 users with different roles, one is super admin, one is admin and one is regular user
        $user = new User();
        $user->setEmail('superadmin@gp87.fr');
        $user->setRoles(['ROLE_SUPER_ADMIN']);
        $user->setPassword($this->passwordEncoder->hashPassword($user, 'superadmin'));
        $manager->persist($user);

        $user = new User();
        $user->setEmail('admin@gp87.fr');
        $user->setRoles(['ROLE_ADMIN']);
        $user->setPassword($this->passwordEncoder->hashPassword($user, 'admin'));
        $manager->persist($user);

        $user = new User();
        $user->setEmail('user@gp87.fr');
        $user->setRoles(['ROLE_USER']);
        $user->setPassword($this->passwordEncoder->hashPassword($user, 'user'));
        $manager->persist($user);

        $manager->flush();
    }

    public function userInformations(ObjectManager $manager): void
    {
        // For each user, we create random fake informations for firstname, name, street, city, zip code and phone number
        // First, we get the list of Users
        $users = $manager->getRepository(User::class)->findAll();

        // Then, for each one, we create fake informations to the link userInformations linked to the user
        foreach ($users as $user) {
            $userInformations = new UserInformations();
            $faker = \Faker\Factory::create('fr_FR');
            $userInformations->setFirstname($faker->firstName());
            $userInformations->setName($faker->lastName());
            $userInformations->setStreet($faker->streetAddress());
            $userInformations->setCity($faker->city());
            $userInformations->setZip($faker->numberBetween(10000, 99999));
            $userInformations->setPhoneNumber($faker->numberBetween(1000000000, 9999999999));
            $userInformations->setMobileNumber($faker->numberBetween(1000000000, 9999999999));
            $userInformations->setUser($user);

            $manager->persist($userInformations);

            // We link the userInformations to the user
            $user->setUserInformations($userInformations);
        }

        $manager->flush();
    }

    public function load(ObjectManager $manager): void
    {
        // We call the functions to create users and userInformations
        $this->user($manager);
        $this->userInformations($manager);
    }
}
