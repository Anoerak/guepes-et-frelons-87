<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\User;
use App\Entity\Bill;
use App\Entity\Stock;
use DateTimeImmutable;
use App\Entity\Product;
use App\Entity\UserInformations;
use Doctrine\Persistence\ObjectManager;
use App\Entity\UserDeliveryInformations;
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

    /* #region Users */
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
    /* #endregion */


    /* #region userInformations */
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
            $userInformations->setDeliverHere($faker->boolean());
            $userInformations->setUser($user);

            $manager->persist($userInformations);

            // We link the userInformations to the user
            $user->setUserInformations($userInformations);
        }

        $manager->flush();
    }
    /* #endregion */


    /* #region userDeliveryInformation */
    public function userDeliveryInformation(ObjectManager $manager): void
    {
        $users = $manager->getRepository(User::class)->findAll();

        // Then, for each one, we create fake informations to the link userInformations linked to the user
        foreach ($users as $user) {
            $userInformations = new UserDeliveryInformations();
            $faker = \Faker\Factory::create('fr_FR');
            $userInformations->setStreet($faker->streetAddress());
            $userInformations->setCity($faker->city());
            $userInformations->setZip($faker->numberBetween(10000, 99999));
            $userInformations->setActive(
                $user->getUserInformations()->isDeliverHere()
                    ? false : true

            );
            $userInformations->setUser($user);

            $manager->persist($userInformations);
        }

        $manager->flush();
    }
    /* #endregion */


    /* #region Bill */
    public function Bill(ObjectManager $manager): void
    {
        // We create 3 Bill for each user
        // First, we get the list of Users
        $users = $manager->getRepository(User::class)->findAll();

        // Then, for each one, we create 3 Bill
        foreach ($users as $user) {
            for ($i = 0; $i < 3; $i++) {
                $bill = new Bill();
                $faker = \Faker\Factory::create('fr_FR');
                $bill->setNumber($faker->numberBetween(1000, 9999));
                $bill->setUser($user);
                $bill->setStatus($faker->randomElement(['paid', 'unpaid', 'pending', 'canceled']));
                $bill->setLink(match (rand(1, 10)) {
                    1 => 'https://www.google.com',
                    2 => 'https://www.facebook.com',
                    3 => 'https://www.twitter.com',
                    4 => 'https://www.instagram.com',
                    5 => 'https://www.linkedin.com',
                    6 => 'https://www.youtube.com',
                    7 => 'https://www.pinterest.com',
                    8 => 'https://www.tumblr.com',
                    9 => 'https://www.snapchat.com',
                    10 => 'https://www.reddit.com',
                });
                $bill->setAmount($faker->numberBetween(1000, 100000));
                $bill->setCreatedAt(new DateTimeImmutable($faker->dateTimeBetween(
                    '-6 months',
                    'now',
                    null
                )->format('Y-m-d H:i:s')));
                $bill->setModifiedAt(new DateTimeImmutable($faker->dateTimeBetween('-3 months', 'now', null)->format('Y-m-d H:i:s')));

                $manager->persist($bill);
            }
        }

        $manager->flush();
    }
    /* #endregion */


    /* #region Product */
    public function Product(ObjectManager $manager): void
    {
        // we create 10 Product, all about honey with fake pictures link
        for ($i = 0; $i < 10; $i++) {
            $product = new Product();
            $faker = \Faker\Factory::create('fr_FR');
            $product->setName(match (rand(1, 10)) {
                1 => 'Honey',
                2 => 'Syrup',
                3 => 'Jars',
                4 => 'Bread',
                5 => 'Beekeeper',
                6 => 'Cinnamon',
                7 => 'Pancakes',
                8 => 'Baklava',
                9 => 'Lemon',
                10 => 'Nuns',
            });
            $product->setDescription(
                // We generate a 200 characters text about honey
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, error. Dolorem, nesciunt suscipit cupiditate inventore quaerat et maiores id facilis quo odio molestiae! Expedita accusantium quo excepturi earum deserunt. Ipsa repudiandae distinctio dignissimos sit voluptates est tenetur id delectus sint, maxime ab minus cumque nesciunt consequatur? Reiciendis amet nulla, pariatur harum eos minima dolore vero? Consequuntur, suscipit? Voluptates reiciendis fugiat voluptatibus? Consequuntur molestiae numquam omnis nemo. Rem libero optio nostrum nisi, pariatur vero corrupti et totam cumque fugit sunt dolor quas ad molestiae facilis debitis modi accusamus accusantium nihil itaque doloremque placeat incidunt beatae voluptas! Rerum inventore assumenda laboriosam ex molestias soluta eum sint, dolorum id, sit error vero blanditiis. Hic velit consectetur officia ullam? Praesentium blanditiis sint nam, rem voluptatibus accusantium laboriosam consequatur? Quasi magnam sunt eligendi animi aliquam aut exercitationem ducimus accusantium dolore, sint error modi commodi. Iste aperiam labore aut cumque expedita perspiciatis! Dolores ab praesentium maxime quo repudiandae, beatae ratione fugit in cumque est odit cupiditate corporis! Ex, sint quisquam hic consequuntur rem sapiente ut obcaecati expedita officiis vero minus magnam nam eius blanditiis iusto velit saepe natus corporis quia soluta iste distinctio totam. Ipsa quae eos aut, suscipit cum id fuga sunt maiores perspiciatis placeat!'
            );
            $product->setPicture(match (rand(1, 10)) {
                1 => 'https://pixabay.com/photos/honey-yellow-beekeeper-nature-1958464/',
                2 => 'https://pixabay.com/photos/honey-syrup-pouring-sweet-organic-1006972/',
                3 => 'https://pixabay.com/photos/honey-jars-harvest-bees-garden-352205/',
                4 => 'https://pixabay.com/photos/honey-bread-spoon-bio-nature-752145/',
                5 => 'https://pixabay.com/photos/honey-beekeeper-beekeeping-glass-5043708/',
                6 => 'https://pixabay.com/photos/honey-cinnamon-bowl-bee-honey-2542952/',
                7 => 'https://pixabay.com/photos/pancakes-honey-stack-2139844/',
                8 => 'https://pixabay.com/photos/food-eastern-sweets-baklava-sweet-5158702/',
                9 => 'https://pixabay.com/photos/lemon-citrus-fruits-mint-citrus-91537/',
                10 => 'https://pixabay.com/photos/nuns-picnic-treatment-syrup-honey-2304009/',
            });
            $product->setPrice($faker->numberBetween(7, 23));

            $manager->persist($product);
        }

        $manager->flush();
    }
    /* #endregion */


    /* #region Stock */
    public function stock(ObjectManager $manager): void
    {
        // For each product, we create a stock
        // First, we get the list of Product
        $Product = $manager->getRepository(Product::class)->findAll();

        // Then, for each one, we create a stock
        foreach ($Product as $product) {
            $stock = new Stock();
            $stock->setQuantity(rand(1, 100));
            $stock->setProduct($product);

            $manager->persist($stock);
        }

        $manager->flush();
    }
    /* #endregion */

    public function load(ObjectManager $manager): void
    {
        // We call the functions to create users and userInformations
        $this->user($manager);
        $this->userInformations($manager);
        $this->userDeliveryInformation($manager);
        $this->Bill($manager);
        $this->Product($manager);
        $this->stock($manager);
    }
}
