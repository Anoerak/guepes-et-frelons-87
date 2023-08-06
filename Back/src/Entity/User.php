<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\OneToOne(mappedBy: 'User', cascade: ['persist', 'remove'])]
    private ?UserInformations $userInformations = null;

    #[ORM\OneToMany(mappedBy: 'User', targetEntity: Bill::class)]
    private Collection $Bill;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: UserDeliveryInformations::class)]
    private Collection $userDeliveryInformations;

    public function __construct()
    {
        $this->Bill = new ArrayCollection();
        $this->userDeliveryInformations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getUserInformations(): ?UserInformations
    {
        return $this->userInformations;
    }

    public function setUserInformations(?UserInformations $userInformations): static
    {
        // unset the owning side of the relation if necessary
        if ($userInformations === null && $this->userInformations !== null) {
            $this->userInformations->setUser(null);
        }

        // set the owning side of the relation if necessary
        if ($userInformations !== null && $userInformations->getUser() !== $this) {
            $userInformations->setUser($this);
        }

        $this->userInformations = $userInformations;

        return $this;
    }

    /**
     * @return Collection<int, Bill>
     */
    public function getBill(): Collection
    {
        return $this->Bill;
    }

    public function addBill(Bill $bill): static
    {
        if (!$this->Bill->contains($bill)) {
            $this->Bill->add($bill);
            $bill->setUser($this);
        }

        return $this;
    }

    public function removeBill(Bill $bill): static
    {
        if ($this->Bill->removeElement($bill)) {
            // set the owning side to null (unless already changed)
            if ($bill->getUser() === $this) {
                $bill->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, UserDeliveryInformations>
     */
    public function getUserDeliveryInformations(): Collection
    {
        return $this->userDeliveryInformations;
    }

    public function addUserDeliveryInformations(UserDeliveryInformations $userDeliveryInformations): static
    {
        if (!$this->userDeliveryInformations->contains($userDeliveryInformations)) {
            $this->userDeliveryInformations->add($userDeliveryInformations);
            $userDeliveryInformations->setUser($this);
        }

        return $this;
    }

    public function removeUserDeliveryInformations(UserDeliveryInformations $userDeliveryInformations): static
    {
        if ($this->userDeliveryInformations->removeElement($userDeliveryInformations)) {
            // set the owning side to null (unless already changed)
            if ($userDeliveryInformations->getUser() === $this) {
                $userDeliveryInformations->setUser(null);
            }
        }

        return $this;
    }
}
